# New Generation High School Student Portal

Group members and what each person built:

- **Minyan Liu (Member A)** — `app/layout.tsx`, Navbar, Footer, StatsPanel, overall look
- **Nguyen Hoang Yen (Member B)** — `data/students.ts`, StudentList, StudentCard
- **Iris Dunbar (Member C)** — StudentPortal, SearchBox, AddStudent

Live site: https://frontend-development-components.vercel.app/
GitHub repo: https://github.com/liuminyan1030-ops/frontend-development-components

## How to run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Test checklist

| # | Do this | You should see | Result |
|---|---------|----------------|--------|
| 1 | Open the app. | Every student from the data file shows, and the three numbers match the data. | Pass |
| 2 | Click Show details on one card, then click it again. | That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. | Pass |
| 3 | Remove a grade 12 student. | The student is gone, and both Students and Graduating drop by one. | Pass |
| 4 | Type a last name in capitals, such as AHMED, into the search box. Then empty the box. | Only the matching student shows. When the box is empty, every student is back. | Pass |
| 5 | Search for zzz. | The no-students message shows. The three numbers do not change. | Pass |
| 6 | Leave the first name empty, fill in the last name, and click Add student. | Nothing is added. | Pass |
| 7 | Fill in all four inputs and click Add student. | The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70. | Pass |
| 8 | Click Clear all. | The no-students message shows, and all three numbers are 0. | Pass |
| 9 | Narrow the browser to phone width (DevTools device toolbar). | The cards stack in one column, and nothing scrolls sideways. | Pass |
| 10 | Click each link in the navbar. | The page jumps to that section. | Pass |
