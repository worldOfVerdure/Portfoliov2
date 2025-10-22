# VERSIONS.md

## Version 1.0 React 18+

### Core Stack
- Next.js: 15.5.2
- React: 18.3.1
- React DOM: 18.3.1

### UI & Styling
- @mui/material: 7.3.2
- @emotion/react: 11.14.0
- @emotion/styled: 11.14.1

### Versioning Philosophy
- All dependencies are pinned with exact versions (`save-exact=true` in .npmrc)
- No caret (`^`) or tilde (`~`) specifiers to ensure reproducible installs
- Peer dependencies audited for compatibility with React 18
- Lockfile (`package-lock.json`) committed for deterministic builds

### Notes
- React 18.3.1 chosen for stability and full Next.js 15 support
- MUI 7.3.2 aligns with Emotion 11.x and React 18
- `.npmrc` included to enforce exact versioning on future installs
