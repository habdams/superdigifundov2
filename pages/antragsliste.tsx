import type { ReactElement } from "react";
import Layout from "../components/layout";
import { Tab } from "../components/Tab";

const Antragsliste = () => {

    return (
        <div className="overflow-y-scroll">
            <Tab />
        </div>
    );
};

Antragsliste.getLayout = function getLayout(Antragsliste: ReactElement) {
    return <Layout>{Antragsliste}</Layout>;
};

export default Antragsliste;
