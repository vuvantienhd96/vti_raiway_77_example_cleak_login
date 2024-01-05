import { Link, Outlet } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";
import { useState, useMemo, useNavigate } from "react";
import RootRightCmp from "./rootRight";

// import contetx
import { ThemeContext, TitleContext } from "../main";
import WithOutContext from "../components/withOutContext";
import "../index.scss";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";


export default function Root() {

  const [initialConntext, setInitContext] = useState({
    theme: false,
    title: "Hello homepage",
    data: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ],
  });

   

  return (
    <>
        <ThemeContext.Provider value={initialConntext}>
          <div style={{display: "flex", height: "100%"}}>
          <div
            id="sidebar"
            className={initialConntext.theme ? "dark" : "light"}
          >
            <h1>this is demo test vti</h1>
            <div>
              <TitleContext.Provider value={"...."}>
                <form id="search-form" role="search">
                  <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                  />
                  <div id="search-spinner" aria-hidden hidden={true} />
                  <div className="sr-only" aria-live="polite"></div>
                </form>
                <WithOutContext />
              </TitleContext.Provider>
              <form method="post">
                <button type="submit">New</button>
              </form>
              <button
                onClick={() => {
                  setInitContext({
                    ...initialConntext,
                    theme: !initialConntext.theme,
                  });
                }}
              >
                <MessageOutlined />
              </button>

              <UserButton />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Layout</Link>
                </li>
                <li>
                  <Link to="userList">User List</Link>
                </li>
                <li>
                  <Link to="admin/testTaiwind">Tailwindcss</Link>
                </li>
                <li>
                  <Link to={"admin/customHook"}>customHook</Link>
                </li>
              </ul>
            </nav>
          </div>
          <RootRightCmp />
          </div>
        </ThemeContext.Provider>
    </>
  );
}
