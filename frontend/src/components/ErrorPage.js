import { useRouteError } from "react-router-dom";
import "../css/ErrorPage.css";
import gift from "../img/gift.png";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="ErrorPage h-full pt-24 max-w-5xl mx-auto text-center relative">
      <h1 className="text-brand-primary text-6xl">Oops!</h1>
      <p className="mt-6 text-lg text-brand-secondary max-w-2xl mx-auto">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="mt-6 text-lg text-brand-secondary max-w-2xl mx-auto">
          {error.statusText || error.message}
        </i>
      </p>
      <img className="bouncing-image" src={gift} width="50" height="50"></img>
    </div>
  );
}
