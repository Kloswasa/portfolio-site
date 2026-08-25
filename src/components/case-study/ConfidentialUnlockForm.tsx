"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { unlockConfidentialCaseStudy } from "@/src/lib/confidential/actions";

export function ConfidentialUnlockForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await unlockConfidentialCaseStudy(password);

      if (result.ok) {
        router.refresh();
        return;
      }

      setError(result.error);
    });
  }

  return (
    <section className="locked-study__unlock" aria-labelledby="locked-study-unlock-title">
      <h2 id="locked-study-unlock-title" className="locked-study__unlock-title">
        Have access?
      </h2>
      <p className="locked-study__unlock-note">
        Enter the password to view the full record.
      </p>

      <form className="locked-study__unlock-form" onSubmit={handleSubmit}>
        <label className="locked-study__unlock-label" htmlFor="confidential-password">
          Password
        </label>
        <div className="locked-study__unlock-row">
          <input
            id="confidential-password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="locked-study__unlock-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isPending}
            required
          />
          <button
            type="submit"
            className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending || password.length === 0}
          >
            {isPending ? "Checking…" : "Unlock"}
          </button>
        </div>
        {error ? (
          <p className="locked-study__unlock-error" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </section>
  );
}
