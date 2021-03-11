//#region imports
import React from "react"
import { useDispatch } from "react-redux"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { saveUserProfile } from "../../../../actions/user.actions"
import { useTypedSelector } from "../../../../hooks/use.type.selector"
import { InitUserState } from "../../../../inital.state/user.initial.state"
import { ErrorNotification, Messages } from "../../../../utills/"
import { TabContent, TabTitle } from "../../../common"
import { AccountInfo } from "./account.info"
import { AccountSetting } from "./account.setting"
//#endregion

const UserAccount: React.FC = () => {
  const user = useTypedSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const isObjEmpty = () =>
    JSON.stringify(user) === JSON.stringify(InitUserState)
  const submit = () => {
    if (isObjEmpty()) {
      ErrorNotification(Messages.FillRequiredFill)
    } else dispatch(saveUserProfile(user))
  }
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <TabTitle title="Account Setting" />
          </Tab>
          <Tab>
            <TabTitle title="User Information" />
          </Tab>
        </TabList>
        <TabPanel>
          <TabContent>
            <AccountSetting />
          </TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent>
            <AccountInfo />
          </TabContent>
        </TabPanel>
      </Tabs>
      <div className="row submit-btn">
        <button className="mr-2 btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export { UserAccount }
