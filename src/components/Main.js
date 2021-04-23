import React, { useContext } from "react";
import { LinkContext } from "../Context/link-provider";
import { Switch, Route } from "react-router-dom";

const Main = () => {
    const links = useContext(LinkContext);
    return (
        <Switch>
            {links.map(({ path, exact, id, component }) => (
                <Route
                    path={path}
                    exact={exact}
                    component={component}
                    key={id}
                />
            ))}
        </Switch>
    );
};

export default Main;
