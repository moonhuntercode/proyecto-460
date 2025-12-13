import type React from "react";
import './BoletinEmail.css'
import { useAppContext } from "../../context/AppContext";
const BoletinEmail: React.FC=()=> {
    const {t}= useAppContext();
        return (
          <form id="boletin-email-form" action="#">
            <label htmlFor="email">{t("email_label")}</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("placeholder_email")}
            />
            <button type="submit">{t("register_email")}</button>
          </form>
        );
}
export default BoletinEmail;