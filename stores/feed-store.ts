import { Notes } from "@prisma/client"
import {create} from "zustand"
import { persist } from "zustand/middleware"

interface FeedState {
    feeds: Notes[] | null
    addFeed: (notes: Notes[]) => void
    removeFeed: (notes: Notes) => void
}

export const useFeedStore = create<FeedState>()(
    persist(
        (set) =>(
            {
                feeds: null,
                addFeed: (notes: Notes[]) => set((state)=>({feeds: notes})),
                removeFeed: (notes: Notes) => set((state)=>({feeds: state.feeds?.filter((e)=> e.id !== notes.id)}))
            }
        ),
        {
            name: "feed store"
        }
    )
)