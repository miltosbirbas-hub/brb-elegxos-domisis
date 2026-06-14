# Έλεγχος Δόμησης — Πόρισμα Ελεγκτών Δόμησης

Αυτόνομη PWA. Πόρισμα Ελεγκτών Δόμησης κατά Ν.4495/2017 & ΚΥΑ 299/2014.

## Περιεχόμενα
- `index.html` — η εφαρμογή (αυτόνομη, με ενσωματωμένη βιβλιοθήκη DOCX, χωρίς εξωτερικά CDN)
- `manifest.json` — PWA manifest
- `sw.js` — service worker (offline cache)
- `elegxos-icon-192/512/512-maskable.png`, `elegxos-apple-touch-icon.png` — εικονίδια

## Χαρακτηριστικά
- Κατηγορίες Α/Β/Γ + στάδια (αρχικός/ενδιάμεσος/τελικός) με κλείδωμα ανά κατηγορία
- Αριθμημένα υποχρεωτικά σημεία ελέγχου «ΕΛΕΓΧΕΙΣ: 1,2,3…» (άρθρο 4 ΚΥΑ 299/2014)
- Αυτόματος υπολογισμός αμοιβής (άρθρο 3) + απαιτούμενοι ελεγκτές
- Φωτογραφίες & σχέδια με λεζάντες
- Εκτύπωση πορίσματος (A4) + εξαγωγή DOCX (offline)
- Χρώματα hexis, εναλλαγή φωτισμού Εξωτ./Εσωτ., κομπιουτεράκι, νομοθεσία
- Τοπική αυτόματη αποθήκευση (autosave)

## Ανέβασμα (GitHub Pages)
1. Νέο repo: `brb-elegxos-domisis` (Public).
2. Add file → Upload files → σύρε ΟΛΑ τα αρχεία στη ρίζα (όχι τον φάκελο) → Commit.
3. Settings → Pages → Deploy from a branch → main, / (root) → Save.
4. URL: https://miltosbirbas-hub.github.io/brb-elegxos-domisis/

## Προσοχή
- Το `manifest.json` έχει απόλυτα URLs με βάση το repo `brb-elegxos-domisis`.
  Αν αλλάξεις όνομα repo, διόρθωσε τα `start_url`, `scope` και τα `icons[].src`.
- Το service worker θέλει https (το GitHub Pages το έχει αυτόματα).
  Με διπλό κλικ τοπικά η εφαρμογή δουλεύει, αλλά χωρίς offline cache/εγκατάσταση.

## Σύνδεση με hexis hub (αργότερα)
Στο registry του hub, η κάρτα «Έλεγχος Δόμησης» θα δείχνει σε αυτό το URL
αντί για το τοπικό `./elegxos-domisis.html`.
