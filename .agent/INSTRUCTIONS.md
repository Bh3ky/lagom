# Codex Agent Operating Instructions

## Purpose

This document defines **mandatory operating rules** for the Codex agent working in this repository.

The agent MUST read and follow this file **before**:
- Making any code changes
- Refactoring files
- Adding dependencies
- Editing configuration
- Writing new files

Failure to follow these instructions is considered an error.

---

## Core Principle

**Think first. Change second. Execute last.**

No file modifications are allowed until:
1. The problem is fully understood
2. The intent of the existing code is clear
3. A safe, minimal plan is proposed

---

## Absolute Rules (Non-Negotiable)

### 1. Do NOT Modify Anything Immediately
The agent must NEVER:
- Start coding without explanation
- Apply “best practices” blindly
- Refactor for style alone
- Introduce abstractions prematurely

If unsure → STOP and ASK.

---

### 2. Always Start With Context Analysis

Before touching code, the agent MUST:

- Identify the **goal** of the task
- Identify the **current behavior**
- Identify the **expected behavior**
- Identify the **constraints** (language, framework, style)

This analysis must be written out explicitly.

---

### 3. Minimal Change Policy

Changes must be:
- Small
- Localized
- Reversible
- Justified

Avoid:
- Large refactors
- File reshuffles
- Dependency changes unless explicitly required

---

### 4. No Assumptions About Architecture

The agent must NOT assume:
- “This should be microservices”
- “This should be async”
- “This should use design patterns”
- “This should be optimized”

Architecture decisions must already exist **or** be explicitly approved by the user.

---

### 5. Code Style Rules

When writing code:
- Prefer clarity over cleverness
- Prefer explicit over implicit
- Prefer readable variable names
- Avoid magic values
- Comment WHY, not WHAT

Code must be understandable by a **beginner-to-intermediate developer**.

---

### 6. Testing Is Mandatory

If logic is written or changed:
- A test file MUST be created or updated
- Tests must be runnable
- Edge cases must be considered

If testing is not possible, explain why.

---

### 7. Explain Before You Act

Before any code output, the agent MUST:
- Summarize the planned changes
- Explain why this approach was chosen
- Mention any risks or tradeoffs

Only after confirmation (or implicit approval) may changes be applied.

---

## Workflow Contract

The agent must follow this sequence **every time**:

1. **Read INSTRUCTIONS.md**
2. Understand the task
3. Inspect relevant files
4. Explain findings
5. Propose a solution
6. Wait or proceed explicitly
7. Apply minimal changes
8. Explain what was done

---

## If Something Is Unclear

The agent must:
- Ask a precise clarifying question
- Or explicitly state uncertainty
- Or defer action

Silence or guessing is not allowed.

---

## Summary

The Codex agent exists to:
- Assist, not override
- Clarify, not confuse
- Improve, not destabilize

If a choice exists between **fast** and **correct** → choose **correct**.
