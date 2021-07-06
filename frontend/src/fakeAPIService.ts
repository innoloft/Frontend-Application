import { UserAdditonalInfo, UserMainInfo } from "./state/types";

class fakeAPIServiceClass {
  public async updateUserMainInfo({ email, password }: UserMainInfo) {
    return new Promise((res, rej) => {
      // Mocking API call with the help of settimeout function
      setTimeout(() => {
        // Randomizing the API success and failure events with 3:1 probability
        const isSuccess: boolean = Math.floor(Math.random() * 4) > 0;
        if (isSuccess) {
          // API updated the details
          res({ type: "success", data: { email, password } });
        } else {
          // API could not update the details
          rej({
            type: "error",
            message: "User main info could not be saved, please try again!",
          });
        }
      }, 2000);
    });
  }
  public async updateUserAdditionalInfo({
    firstName,
    lastName,
    address,
    country,
  }: UserAdditonalInfo) {
    return new Promise((res, rej) => {
      // Mocking API call with the help of settimeout function
      setTimeout(() => {
        const isSuccess: boolean = Math.floor(Math.random() * 2) === 1;
        if (isSuccess) {
          // API updated the details
          res({
            type: "success",
            data: { firstName, lastName, address, country },
          });
        } else {
          // API could not update the details
          rej({
            type: "error",
            message:
              "User additional info could not be saved, please try again!",
          });
        }
      }, 2000);
    });
  }
}

const fakeAPIService: fakeAPIServiceClass = new fakeAPIServiceClass();
export default fakeAPIService;
