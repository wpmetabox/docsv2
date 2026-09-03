# Workflow & Git

- Git workflow: stage only the changes worked on, exclude unrelated files, write a concise commit message, then push after committing. Confidence: 1.0
- Works on a dedicated docs branch per feature (e.g., docs/block-bindings) based on master, committing and pushing per logical change rather than all at once. Confidence: 0.6
- When updating docs for a new feature, applies the same changes consistently across related/sibling extension docs, not just one file. Confidence: 0.6
- When asked to audit curated provider lists (hosts, themes) in docs, verifies each entry's status thoroughly (HTTP status, DNS lookup, web fetch, web search) before removing anything; only removes entries confirmed dead. Confidence: 0.7
- Errs on the side of keeping list entries when status is ambiguous (e.g., site unreachable from one location but business still active on marketplaces like ThemeForest or still indexed by search engines); prefers to be consulted before the agent makes a subjective deletion decision. Confidence: 0.7
