import React, { useState, useEffect } from "react";
import { Stack, AddressBook, Coins, Export } from "phosphor-react";
import Notes from "./notes";
import SidebarTextarea from "../components/sidebarTextarea";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";


export default function Sidebar(props) {
    const dispatch = useDispatch();
    const history = useRouter();
    const [addNote, setAddNote] = useState("");
    const [noteList, setNoteList] = useState([]);

    const handleAddNote = () => {
        setNoteList([...noteList, { note: addNote }]);

        setAddNote(" ");
    };

    function handleNewNote(e) {
        let newNote = e.target.value;
        setAddNote(newNote);
    }





    return (
        <>
            <div className="h-full bg-gray-50 w-full">
                <div className="h-screen flex flex-col bg-stone-100 p-5 w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Notizen</h3>
                        <Export size={24} />
                    </div>
                    <div className="mb-4">
                        <p className="text-sm font-sans">
                            Hier ist Platze für Ihre Notizen. Sie können
                            jederzeit darauf zugreifen.
                        </p>
                    </div>
                    <div className="mb-2 text-xs text-gray-400 font-bold">
                        <h5>Anmerkungen</h5>
                    </div>
                    <div className="mb-14 overflow-y-auto border bg-stone-100 rounded-lg p-1 w-11/12">
                        {noteList.map((note, index) => (
                            <div key={index}>
                                <Notes note={note.note} id={index} />
                            </div>
                        ))}
                    </div>
                    <div className="self-end w-full">
                        {/* <textarea
                            name=""
                            id="newNote"
                            cols={29}
                            rows={6}
                            placeholder="Klicken Sie hier um eine Notizt zu schreiben"
                            value={addNote}
                            className="rounded border-2 border-gray-300 text-sm mt-10"
                            onChange={handleNewNote}
                        ></textarea> */}
                        <SidebarTextarea
                            handleNote={handleAddNote}
                            onChangeNote={handleNewNote}
                            noteState={addNote}
                        />

                        {/* <button
                            type="submit"
                            onClick={() => {
                                handleAddNote();
                            }}
                            className="my-4 bg-black p-2 rounded-md text-white text-sm w-full"
                        >
                            Hinweis speichern{" "}
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}
