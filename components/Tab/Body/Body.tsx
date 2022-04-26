import Sidebar from "../../sidebar";
import { Verwendungsnachweis } from "./Verwendungsnachweis";
import { Antragsliste } from "./Antragsliste";
import { BescheideVermerke } from "./BescheideVermerke";
import { FachlicheDokumente } from "./FachlicheDokumente ";
import { Kalkulation } from "./Kalkulation";

export enum TabTypes {
    ANTRAGLISTE = "Antrag",
    FACHLICHE_DOKUMENTE = "Fachliche Dokumente",
    BESCHEIDE_VERMERKE = "Bescheide & Vermerke",
    VERWENDUNGSNACHWEIS = "Verwendungsnachweis",
    KALKULATION = "Kalkulation",
}

export const Body = (props) => {
    const { activeTab } = props;
    const getActiveContent = () => {
        switch (activeTab) {
            case TabTypes.ANTRAGLISTE:
                return <Antragsliste />;

            case TabTypes.FACHLICHE_DOKUMENTE:
                return <FachlicheDokumente />;

            case TabTypes.BESCHEIDE_VERMERKE:
                return <BescheideVermerke />;

            case TabTypes.VERWENDUNGSNACHWEIS:
                return <Verwendungsnachweis />;

            case TabTypes.KALKULATION:
                return <Kalkulation />;

            default:
                return <Antragsliste />;
        }
    };

    return (
        <>
            <div className="flex w-full">
                <div className="w-3/4 container px-6">{getActiveContent()}</div>

                {activeTab == TabTypes.BESCHEIDE_VERMERKE ? null : activeTab ==
                    TabTypes.VERWENDUNGSNACHWEIS ? null : (
                    <div className="w-1/4">
                        <Sidebar />
                    </div>
                )}
            </div>
        </>
    );
};
