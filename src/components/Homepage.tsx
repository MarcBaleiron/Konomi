"use client";

import { useState } from "react";
import styles from "./Homepage.module.css";
import { CATEGORIES, MODES, type CategoryId } from "@/lib/constants";
import { VideoIcon, MusicIcon, FilmIcon, BookIcon, SettingsIcon } from "@/lib/icons";

const ICONS: Record<CategoryId, () => JSX.Element> = {
  videos: VideoIcon,
  music: MusicIcon,
  films: FilmIcon,
  books: BookIcon,
};

export default function Homepage() {
  const [active, setActive] = useState<CategoryId | null>(null);
  const [mode, setMode] = useState<"artists" | "personal" | "mixed">("artists");
  const [entered, setEntered] = useState(false); // has the collapse-to-sidebar happened yet

  function selectCategory(id: CategoryId) {
    setActive(id);
    setMode("artists");
    if (!entered) setEntered(true);
  }

  const activeCategory = CATEGORIES.find((c) => c.id === active);
  const activeMode = MODES.find((m) => m.id === mode)!;

  return (
    <div className={styles.app}>
      <div 
        className={`${styles.wordmark} ${entered ? styles.wordmarkInLayout : styles.wordmarkHero}`}
      >
        Konomi
      </div>

      {!entered && (
        <>
          <button
            className={styles.heroSettings}
            title="Settings"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>

          <section className={styles.hero}>
            <h1>Fall for something new, in the language you're learning.</h1>
            <p>Tell us what you already love — we'll point you to the version of it made somewhere else.</p>
            <div className={styles.tiles}>
              {CATEGORIES.map((c) => {
                const Icon = ICONS[c.id];
                return (
                  <div
                    key={c.id}
                    className={styles.tile}
                    tabIndex={0}
                    role="button"
                    aria-label={c.label}
                    onClick={() => selectCategory(c.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectCategory(c.id);
                      }
                    }}
                  >
                    <div className={styles.tileInner}>
                      <div className={`${styles.tileFace} ${styles.tileFront}`}>
                        <Icon />
                        <span className={styles.label}>{c.label}</span>
                      </div>
                      <div className={`${styles.tileFace} ${styles.tileBack}`}>
                        <p>{c.tagline}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {entered && (
        <div className={styles.layout}>
          <nav className={styles.sidebar}>
            {CATEGORIES.map((c) => {
              const Icon = ICONS[c.id];
              return (
                <button
                  key={c.id}
                  className={`${styles.sbBtn} ${active === c.id ? styles.selected : ""}`}
                  title={c.label}
                  onClick={() => selectCategory(c.id)}
                >
                  <Icon />
                  <span>{c.label}</span>
                </button>
              );
            })}

            <div className={styles.sbSpacer} />

            <button className={styles.sbBtn} title="Settings" aria-label="Settings">
              <SettingsIcon />
              <span>Settings</span>
            </button>
          </nav>

          <main className={styles.content}>
            <h2>{activeCategory?.label}</h2>
            <p className={styles.tagline}>{activeCategory?.tagline}</p>

            <div className={styles.modes}>
              {MODES.map((m) => (
                <button
                  key={m.id}
                  className={`${styles.modeBtn} ${mode === m.id ? styles.on : ""}`}
                  onClick={() => setMode(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className={styles.modePanel}>
              <p>{activeMode.desc}</p>
              <p className={styles.accent}>This mode's recommendation flow isn't built yet.</p>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}