import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Tabs,
  Tab,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { productData } from "../features/productSlice";
import Trl from "./Trl";
import EditForm from "./EditForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: 20,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Product() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(0);
  const [config, setConfig] = useState(null);
  const [appId, setAppId] = useState(
    process.env.REACT_APP_ID ? process.env.REACT_APP_ID : 1
  );
  const product = useSelector(productData);

  useEffect(() => {
    try {
      axios
        .get("https://api-test.innoloft.com/configuration/" + appId)
        .then((response) => {
          setConfig(response.data);
        });
    } catch (e) {
      return console.error(e.message);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (product.length < 0) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      {product[0] && (
        <>
          <div className="flex">
            <h1 style={{ margin: "0 20px" }}>Product</h1>
            <p style={{ cursor: "pointer" }} onClick={handleOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style={{ fill: "#000000", marginTop: -5 }}
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#3498db">
                    <path d="M106.60767,21.05383c-1.70856,-0.06141 -3.44126,0.1265 -5.15454,0.58002c-4.56875,1.20937 -8.33178,4.1651 -10.61615,8.19635l-4.83697,8.73438c-1.075,1.88125 -0.40365,4.43647 1.4776,5.51147l23.24793,13.4375c0.67188,0.40312 1.34375,0.5354 2.01563,0.5354c0.40312,0 0.6703,0.00052 1.07343,-0.13385c1.075,-0.26875 1.8823,-0.94115 2.4198,-1.88177l4.97083,-8.73437c2.28437,-4.03125 2.9573,-8.73228 1.74792,-13.30103c-1.20938,-4.56875 -4.1651,-8.33177 -8.19635,-10.61615c-2.51953,-1.42773 -5.30151,-2.22559 -8.14911,-2.32794zM80.75623,51.23309c-1.30176,0.09973 -2.55102,0.8031 -3.2229,1.97888l-40.5802,70.41303c-4.56875,7.79375 -7.12083,16.52865 -7.65833,25.3974l-1.07605,17.3349c-0.13438,1.47813 0.67188,2.95468 2.01563,3.76093c0.67188,0.40312 1.34375,0.53802 2.01563,0.53802c0.80625,0 1.61145,-0.26875 2.28333,-0.67187l14.51355,-9.5401c7.39063,-4.97188 13.70625,-11.55677 18.14063,-19.35052l40.71667,-70.41303c1.075,-1.88125 0.40103,-4.43385 -1.48022,-5.50885c-1.88125,-1.075 -4.43385,-0.40365 -5.50885,1.4776l-40.71405,70.41303c-3.89687,6.58437 -9.27345,12.36302 -15.72345,16.66302l-7.79218,5.10468l0.5354,-9.26978c0.40313,-7.65938 2.68802,-15.18542 6.5849,-21.90417l40.71668,-70.41303c1.075,-1.88125 0.40365,-4.43385 -1.4776,-5.50885c-0.70547,-0.40312 -1.50752,-0.56112 -2.28857,-0.50128zM65.84375,162.59375c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h53.75c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125zM139.75,162.59375c-2.2264,0 -4.03125,1.80485 -4.03125,4.03125c0,2.2264 1.80485,4.03125 4.03125,4.03125c2.2264,0 4.03125,-1.80485 4.03125,-4.03125c0,-2.2264 -1.80485,-4.03125 -4.03125,-4.03125z"></path>
                  </g>
                </g>
              </svg>
            </p>
          </div>
          <div className="product">
            <div className="product__details">
              <div className="product__info">
                <img src={product[0].picture} alt={product[0].name} />

                <div>
                  <h3>Product Info</h3>

                  <div>
                    <h5>Name</h5>
                    <p>{product[0].name}</p>
                  </div>
                  <div>
                    <h5>Type</h5>
                    <p>{product[0].type.name}</p>
                  </div>
                  <div>
                    <h5>Categories</h5>
                    {product[0].categories.map((category) => (
                      <span key={category.id}>{category.name}, </span>
                    ))}
                  </div>
                </div>
              </div>

              <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label="Description" />
                <Tab label="Attributes" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${product[0].description}`,
                  }}
                ></p>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <h5>Categories</h5>
                  {product[0].categories.map((category) => (
                    <span key={category.id}>{category.name}, </span>
                  ))}

                  <h5>Business Models</h5>
                  {product[0].businessModels.map((model) => (
                    <span key={model.id}>{model.name}, </span>
                  ))}
                </div>

                <Trl data={product[0].trl.name} />
              </TabPanel>
            </div>

            <div className="user__details">
              {config?.hasUserSection && (
                <Card className={classes.root}>
                  <CardContent>
                    <h3>User Details</h3>
                    <img
                      width="200"
                      src={product[0].user.profilePicture}
                      alt="logo"
                    />
                    <p>
                      <strong>Name:</strong> {product[0].user.firstName}{" "}
                      {product[0].user.lastName}
                    </p>
                    <p>
                      <strong>Email:</strong> {product[0].user.email}
                    </p>
                    <p>
                      <strong>Position:</strong> {product[0].user.position}
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className={classes.root}>
                <CardContent>
                  <iframe
                    title="."
                    style={{ border: 0 }}
                    width="100%"
                    height="250"
                    loading="lazy"
                    src={
                      "https://maps.google.com/maps?q=" +
                      product[0].company.address.latitude +
                      "," +
                      product[0].company.address.longitude +
                      "&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    }
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <EditForm name={product[0].name} type={product[0].type.name} close={handleClose} />
              </div>
            </Fade>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Product;
