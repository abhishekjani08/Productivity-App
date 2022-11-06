import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NotesListArea from "./../../components/notes/NotesListArea";
import NotesPreview from "./../../components/notes/NotesPreview";
import Menu from "../menu/Menu"


const NotesContainer = styled.div`
    display: flex;
    width: 100%;
`;

export default function Notes() {
    let [noteInPreview, setNoteInPreview] = useState(null);
    return (
        <>
        <Menu />
        <NotesContainer>
            <NotesListArea setNoteInPreview={setNoteInPreview}/>
            <NotesPreview setNoteInPreview={setNoteInPreview} note={noteInPreview} />
        </NotesContainer>
        </>
    );
}
