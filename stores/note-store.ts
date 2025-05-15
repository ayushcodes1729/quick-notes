import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Notes } from "@prisma/client"

interface NoteState {
    note: Notes | null
    addNote: (notes: Notes) => void
    removeNote: () => void
}

export const useNoteStore = create<NoteState>()(
    persist(
        (set) => (
            {
                note: null,
                addNote: (notes: Notes) => set((state) => ({ note: notes })),
                removeNote: () => set((state) => ({ note: null }))
            }
        ),
        {
            name: "note store"
        }
    )
)

