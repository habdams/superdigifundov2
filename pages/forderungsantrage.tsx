import type { ReactElement } from "react";
import Link from 'next/link';
import Layout from "../components/layout";
import searchIcon from "../utils/search-icon.svg";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const projects = [
    {
        id: 21,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Neues Gebaude",
        Gemeinde: "Hochstadt",
        Landkreis: "Freising",
        Eingangsdatum: "21.02.2021",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 13,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 3,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 4,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Mehr Kinder",
        Gemeinde: "Röhndorf",
        Landkreis: "Bad Honnef",
        Eingangsdatum: "04.04.2022",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Vorgang zum Akt",
        value: "Vorgang",
    },
    {
        id: 5,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 14,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 26,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 1,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Neues Gebaude",
        Gemeinde: "Hochstadt",
        Landkreis: "Freising",
        Eingangsdatum: "21.02.2021",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 6,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 15,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 27,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 32,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Mehr Kinder",
        Gemeinde: "Röhndorf",
        Landkreis: "Bad Honnef",
        Eingangsdatum: "04.04.2022",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Vorgang zum Akt",
        value: "Vorgang",
    },
    {
        id: 7,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 33,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Mehr Kinder",
        Gemeinde: "Röhndorf",
        Landkreis: "Bad Honnef",
        Eingangsdatum: "04.04.2022",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Vorgang zum Akt",
        value: "Vorgang",
    },
    {
        id: 8,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 16,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 28,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 22,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Neues Gebaude",
        Gemeinde: "Hochstadt",
        Landkreis: "Freising",
        Eingangsdatum: "21.02.2021",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 9,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 17,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 30,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 34,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Mehr Kinder",
        Gemeinde: "Röhndorf",
        Landkreis: "Bad Honnef",
        Eingangsdatum: "04.04.2022",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Vorgang zum Akt",
        value: "Vorgang",
    },
    {
        id: 10,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 24,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Neues Gebaude",
        Gemeinde: "Hochstadt",
        Landkreis: "Freising",
        Eingangsdatum: "21.02.2021",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 18,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 29,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 31,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Mehr Kinder",
        Gemeinde: "Röhndorf",
        Landkreis: "Bad Honnef",
        Eingangsdatum: "04.04.2022",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Vorgang zum Akt",
        value: "Vorgang",
    },
    {
        id: 12,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Renovierung",
        Gemeinde: "Hochstadt",
        Landkreis: "Himmelfels",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "N/A",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Eingereicht",
        value: "Eingereicht",
    },
    {
        id: 2,
        Aktenzeichen: "ID 674 947 423",
        Titel: "Neubau",
        Gemeinde: "Schwarzenbruck",
        Landkreis: "Nürnberger Land",
        Eingangsdatum: "31.12.2022",
        Sachbearbeiter: "Frau Schmidt",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },
    {
        id: 25,
        Aktenzeichen: "ID 674 947 934",
        Titel: "Küchen Erweiterung",
        Gemeinde: "Bad Staffelstein",
        Landkreis: "Lichtenfels",
        Eingangsdatum: "05.09.2021",
        Sachbearbeiter: "Frau Zirgel",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "Abgelehnt",
        value: "Abgelehnt",
    },
    {
        id: 23,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Neues Gebaude",
        Gemeinde: "Hochstadt",
        Landkreis: "Freising",
        Eingangsdatum: "21.02.2021",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
        value: "Bearbeitung",
    },

    // More projects...
];

const Forderungsantrage = () => {

    return (
        <>
            <div className=" flex flex-col md:flex-row items-start justify-start mt-8 px-8">
                <div className="pb-2 w-3/5 mt-4">
                    <h1 className="text-2xl ml-4 font-mono">
                        Förderungsanträge
                    </h1>

                    <div className="mt-2 relative flex pb-2 h-14 justify-items-center items-center flex-1 flex-row ">
                        <div className="bg-red-200 w-full h-10 m-4 content-center rounded-full">
                            <input
                                type="text"
                                name="search"
                                placeholder="Suche nach Aktenzeichen, Gemeinde, ..."
                                id="search"
                                className="h-full shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full rounded-full pr-12 sm:text-sm border-gray-300"
                            />
                        </div>

                        <div className="absolute right-0 mr-3 flex flex-col justify-center items-center h-12 w-12 p-2">
                            <Image
                                src={searchIcon}
                                className="px-2 text-pink-400 text-sm items-center "
                            />
                        </div>
                    </div>
                </div>

                <div className=" mt-10 ml-4 w-3/5 flex flex-col justify-end px-20 m-auto items-end">
                    {/* <div>
                    <h3 className="text-lg text-gray-800">
                        Kindergarten Förderung
                    </h3>
                    <p>
                        Restbudget: <span className="font-bold">98 Mio €</span>
                    </p>
                </div> */}
                    <div className=" w-full ml-14">
                        <ul className="flex flex-col md:flex-row text-sm w-full">
                            <li className="mr-4 flex flex-col text-left w-1/4">
                                <span className="flex flex-row items-center">
                                    <span className="w-3 h-3 rounded bg-green-600 mr-2"></span>
                                    <span className="text-gray-700 font-medium text-lg">
                                        129
                                    </span>
                                </span>
                                <span className="mt-2 text-gray-500">
                                    In Bearbeitung
                                </span>
                            </li>

                            <li className="mr-4 flex flex-col text-left w-1/4">
                                <span className="flex flex-row items-center">
                                    <span className="w-3 h-3 rounded bg-pink-600 mr-2"></span>
                                    <span className="text-gray-700 font-medium text-lg">
                                        23
                                    </span>
                                </span>
                                <span className="mt-2 text-gray-500">
                                    Abgelehnt
                                </span>
                            </li>

                            <li className="mr-4 flex flex-col text-left w-1/4">
                                <span className="flex flex-row items-center">
                                    <span className="w-3 h-3 rounded bg-purple-600 mr-2"></span>
                                    <span className="text-gray-700 font-medium text-lg">
                                        92
                                    </span>
                                </span>
                                <span className="mt-2 text-gray-500">
                                    Bescheid erstellet
                                </span>
                            </li>
                            <li className="mr-4 flex flex-col text-left w-1/4">
                                <span className="flex flex-row items-center">
                                    <span className="w-3 h-3 rounded bg-gray-600 mr-2"></span>
                                    <span className="text-gray-700 font-medium text-lg">
                                        943
                                    </span>
                                </span>
                                <span className="mt-2 text-gray-500">
                                    Vorgang zum Akt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white lg:min-w-0 lg:flex-1 px-20">
                <div className="pl-4 pr-6 pt-4 pb-4   sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                    <div className="flex items-center">
                        <h1 className="flex-1 text-lg font-medium"></h1>
                        <Menu as="div" className="relative">
                            {/* <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <SortAscendingIcon
                                className="mr-3 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            Sort
                            <ChevronDownIcon
                                className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Menu.Button> */}
                            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href=""
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Name
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Date modified
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Date created
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div>
            {/* Projects list (only on smallest breakpoint) */}
            <div className="mt-10 sm:hidden">
                <div className="px-4 sm:px-6">
                    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                        Aktenzeichen
                    </h2>
                </div>
                <ul
                    role="list"
                    className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
                >
                    {projects.map((project) => (
                        <li key={project.id} className="">

                            <Link href="/antragsliste">

                                <a
                                    className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                                >
                                    <span className="flex items-center truncate space-x-3">
                                        <span className="font-medium truncate text-sm leading-6">
                                            {project.Aktenzeichen}
                                        </span>
                                    </span>
                                    <ChevronRightIcon
                                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Projects table (small breakpoint and up) */}
            <div className="hidden mt-2 sm:block m-4 px-6">
                <div className="align-middle inline-block min-w-full border-b border-gray-200">
                    <table className="">
                        <thead>
                            <tr className="border-t border-gray-200">
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Aktenzeichen
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Titel
                                </th>
                                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Gemeinde
                                </th>
                                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Lankreis
                                </th>

                                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Eingangsdatum
                                </th>

                                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Sachbearbeiter
                                </th>
                                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {projects.map((project) => (
                                <tr
                                    key={project.id}
                                    className={`h-20 ${project.id % 2 == 1
                                        ? "bg-slate-50"
                                        : "bg-white"
                                        }`}
                                >
                                    <td className="px-6 py-3 max-w-0 w-1/5 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                        <div className="flex items-center space-x-3 lg:pl-2">

                                            <Link href="/antragsliste">
                                                <a className=" hover:text-gray-600">
                                                    <span>
                                                        {project.Aktenzeichen}
                                                    </span>
                                                </a>
                                            </Link>

                                        </div>
                                    </td>
                                    <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                        {project.Titel}
                                    </td>
                                    <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                        {project.Gemeinde}
                                    </td>
                                    <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                        {project.Landkreis}
                                    </td>
                                    <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                        {project.Eingangsdatum}
                                    </td>
                                    <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                        {project.Sachbearbeiter}
                                    </td>
                                    <td className="hidden md:table-cell w-1/12 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-center flex flex-row justify-center">
                                        <span
                                            className={` flex flex-row items-center p-2`}
                                        >
                                            <span
                                                className={`w-2 h-2 rounded bg-${project.value ==
                                                    "Bearbeitung"
                                                    ? "green-600"
                                                    : project.value ==
                                                        "Abgelehnt"
                                                        ? "pink-600"
                                                        : project.value ==
                                                            "Bescheid"
                                                            ? "purple-600"
                                                            : "gray-600"
                                                    } mr-2 z-40`}
                                            ></span>
                                            <span
                                                className={` text-${project.value ==
                                                    "Bearbeitung"
                                                    ? "red-600"
                                                    : project.value ==
                                                        "Abgelehnt"
                                                        ? "pink-600"
                                                        : project.value ==
                                                            "Bescheid"
                                                            ? "purple-600"
                                                            : "gray-600"
                                                    } bg-${project.value ==
                                                        "Bearbeitung"
                                                        ? "green-100"
                                                        : project.value ==
                                                            "Abgelehnt"
                                                            ? "pink-100"
                                                            : project.value ==
                                                                "Bescheid"
                                                                ? "purple-100"
                                                                : "gray-100"
                                                    } rounded-2xl px-4 py-2 `}
                                            >
                                                {project.status}
                                            </span>
                                        </span>
                                    </td>
                                    <td className=" px-10 py-6 w-1/2 whitespace-nowrap text-left text-sm font-medium">
                                        <ChevronRightIcon
                                            className="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                                            aria-hidden="true"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

Forderungsantrage.getLayout = function getLayout(
    forderungsantrage: ReactElement
) {
    return <Layout>{forderungsantrage}</Layout>;
};

export default Forderungsantrage;
