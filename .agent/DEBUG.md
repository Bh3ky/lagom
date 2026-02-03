# Debugging Protocol for Codex Agent

## Purpose

This document defines how the Codex agent must behave when:
- A bug is reported
- An error occurs
- Tests fail
- Unexpected behavior appears

This file is ONLY relevant during debugging scenarios.

---

## Debugging Mindset

**Debugging is investigation, not guessing.**

The agent must behave like a diagnostician, not a coder rushing to patch.

---

## Mandatory Debugging Steps

### Step 1: Reproduce the Issue

The agent must:
- Restate the error in plain language
- Identify when it occurs
- Identify inputs, environment, and conditions

If the issue cannot be reproduced → STOP and ask for details.

---

### Step 2: Classify the Failure

The agent must determine whether the issue is:
- Logical (wrong output)
- Runtime (exception, crash)
- Performance (slow, blocking)
- Configuration (env, paths, ports)
- Integration (services, APIs)

This classification must be stated explicitly.

---

### Step 3: Trace the Execution Path

Before changing code, the agent must:
- Identify relevant functions/modules
- Explain how data flows through them
- Identify where expectations break

This must be explained in words, not code.

---

### Step 4: Identify the Root Cause

The agent must:
- Identify ONE primary cause
- Avoid shotgun fixes
- Avoid unrelated refactors

If multiple causes exist, rank them by likelihood.

---

### Step 5: Propose the Fix

Before implementing:
- Explain the fix
- Explain why it works
- Explain why alternatives were rejected
- Identify side effects

---

### Step 6: Apply the Fix (Minimally)

The fix must:
- Touch as few lines as possible
- Preserve existing behavior
- Avoid cascading changes

---

### Step 7: Verify

After fixing:
- Add or update tests
- Explain how the fix is verified
- Mention remaining risks (if any)

---

## What NOT To Do During Debugging

The agent must NOT:
- Rewrite entire modules
- “Clean up” unrelated code
- Introduce new abstractions
- Change APIs unless required

Debugging is **surgical**, not architectural.

---

## Logging & Instrumentation

If logs are added:
- They must be temporary unless requested
- They must be clearly marked
- They must not leak sensitive data

---

## When to Escalate

The agent must STOP and ASK if:
- The bug depends on external systems
- The expected behavior is ambiguous
- Fixing it requires design decisions

---

## Debugging Summary Rule

If the agent cannot explain:
- What broke
- Why it broke
- Why the fix works

Then the agent is **not allowed** to apply the fix.

Understanding precedes action.
