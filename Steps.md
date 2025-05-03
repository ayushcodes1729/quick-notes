# QuickNotes Project — To-Do List

✅ means done, ☐ means pending

---

## 🛠️ Step 1: Set up Next.js + Tailwind

- [x] Scaffold a Next.js app with Tailwind CSS
- [ ] Set up basic pages like `/` and 404 fallback
- [x] Connect Tailwind styles to the layout

---

## 🛠️ Step 2: Design the homepage

- [x] Create a homepage with “Create Note” button
- [ ] Handle button click to navigate to `/note/[id]`

---

## 🛠️ Step 3: Set up the database

- [x] Choose database (postgreSQL)
- [x] Define Note model: `id`, `slug`, `content`, `updatedAt`
- [x] Run migrations to set up schema

---

## 🛠️ Step 4: Create API routes

- [ ] Build API route to **get** a note by slug (`/api/note/[slug]`)
- [ ] Build API route to **create/update** a note (`POST /api/note`)
- [ ] Test API routes with Postman or from the app

---

## 🛠️ Step 5: Build the note page (`/note/[slug]`)

- [ ] Fetch note content on page load
- [ ] Display `<textarea>` that auto-saves on change
- [ ] Send updates to API without a “Save” button

---

## 🛠️ Step 6: Add unique slug generation

- [ ] Generate a unique random slug for each note
- [ ] Ensure slug is not already used in database

---

## 🛠️ Step 7: Add shareable links

- [ ] Display the shareable URL on the note page
- [ ] Add “Copy link to clipboard” button

---

## 🛠️ Optional: Add markdown support

- [ ] Integrate `react-markdown` to render note content
- [ ] Add toggle between edit mode and preview mode

