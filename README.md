# Scrawldraw Libraries Contributor Guide

Welcome to the official Scrawldraw Libraries documentation. This guide is designed to help developers, designers, and community creators explore existing asset libraries, build custom drawing components, and successfully publish them to the official marketplace at https://libraries.scrawldraw.vercel.app.

---

## How to Create and Publish Your Library

### 1. Sketch Your Objects
Open your workspace canvas on Scrawldraw (https://scrawldraw.vercel.app) and draw the specific assets, diagrams, or UI components you want to package.

### 2. Group for Seamless Reuse (Recommended)
To ensure your complex components behave as a single, unified unit when dragged onto a new canvas, select all the individual paths or shapes of an object and press `Ctrl + G` (or click **Group Selection** in the side menu).

### 3. Add to the Scrawldraw Library Menu
1. Select the grouped object on your active canvas.
2. Open the **Library Panel** by clicking the library icon or pressing the shortcut key `9`.
3. The selected item will instantly appear in a square preview slot. Hover over it and click on it (a `+` icon will appear) to save it locally.
4. Repeat this exact process for all individual items you intend to bundle into your collection.

### 4. Select and Publish
1. Inside the library panel, hover over the specific assets you wish to export and click the checkbox to select them.
2. Click the blue **Publish** button located at the bottom of the panel.
3. Fill out the required asset metadata (Title, Category, Description, and Author information) and submit it for validation.

> **Verification Step:** To double-check your custom library file configuration before final deployment, utilize the **Load** button inside the library panel to re-import the package and test how the elements scale and behave across different viewport sizes.

---

## Submission and Quality Guidelines

To maintain a clean, high-utility, and professional ecosystem within the Scrawldraw Library Marketplace, all incoming submissions must strictly satisfy the following criteria:

| Rule Type | Requirement Details |
| :--- | :--- |
| **Language** | All structural metadata, asset names, structural labels, titles, and public descriptions must be written in English only. |
| **Bundle Size** | A valid submission package must contain a minimum of 3 related assets classified under a single, cohesive category. |
| **Complexity** | Basic, native primitive shapes that can be instantly recreated by any user (e.g., a standard square, straight line, or primitive arrow) will be rejected. |
| **Originality** | Re-uploading, cloning, or slightly tweaking assets directly extracted from other pre-existing libraries without major structural changes is prohibited. |
| **Utility** | Core designs should offer general utility to the broader creative community. Avoid assets built strictly for hyper-specific personal workflows. |
| **Grouping** | Any asset built from multiple independent elements must be grouped prior to export so it initiates as a single draggable component on a new canvas. |

---

## The Review Process

Once you submit your package, the Scrawldraw core team will review your layout configuration:
* If structural elements are left ungrouped, cause canvas lag, or break layout responsiveness upon scaling, the repository maintainers may request explicit modifications.
* Approved high-quality assets will automatically be featured directly on our official landing page showcase section.

Thank you for contributing your technical assets and helping scale the Scrawldraw open-source creative ecosystem.
