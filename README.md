## # 👋 Welcome to the AI Engineer Challenge

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!
2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

🏗️ Forking & Cloning This Repository

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!
  image
2. Clone your newly created repo.
  ```bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
  ```
  > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.
3. Verify your git setup:
  ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
  ```
4. Open the freshly cloned repository inside Cursor!
  ```bash
     cd The-AI-Engineering-Challenge
     cursor .
  ```
5. Check out the existing backend code found in `/api/index.py`

⚙️ Backend Setup with uv

1. Install the `[uv](https://github.com/astral-sh/uv)` package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

🔥Setting Up for Vibe Coding Success

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar.
  image
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.
  image
4. We're then going to use the default configs to add these docs to our available and indexed documents.
  image
5. After that - you will do the same with Vercel's documentation. After which you should see:
  image

😎 Vibe Coding a Front End for the FastAPI Backend

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console.
2. Set the chat settings to the following:
  image
3. Ask Cursor to create a frontend for your application. Iterate as much as you like!
4. Run the frontend using the instructions Cursor provided.

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

🚀 Deploying Your First LLM-powered Application with Vercel

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.
2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!
3. Run the command:
  ```bash
     npm install -g vercel
  ```
4. Run the command:
  ```bash
     vercel
  ```
5. Follow the in-terminal instructions. (Below is an example of what you will see!)
  image
6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

image

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

🧪 Vibe Check Your LLM App

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  
Explanation

**Response:**  Okay, let’s keep this really simple and friendly.  ### Imagine you’re organizing your life with “boxes”  Object-oriented programming (OOP) is a way of writing code where you organize things into **objects**, kind of like putting related stuff into boxes.  Each “box” (object) has: - **Data** – what it *is* (like a person’s name, age) - **Actions** – what it can *do* (like walk, talk, introduce itself)  In OOP, we call the blueprint for these boxes a **class**, and each actual box you create from that blueprint is an **object**.  ---  ### Step 1: Classes are like blueprints  Think of a **class** as a recipe or a plan.  Example: a `Dog` class   It might say: every dog has: - data: `name`, `age`, `breed` - actions: `bark()`, `eat()`, `sleep()`  But the class itself is not a real dog. It’s just the **idea** of a dog.  ---  ### Step 2: Objects are actual things made from the blueprint  When you use the `Dog` class to create a specific dog, that’s an **object**.  For example: - Dog 1: name = "Bella", age = 3, breed = "Labrador" - Dog 2: name = "Max", age = 5, breed = "Beagle"  Bella and Max are both **Dog objects**, made from the same `Dog` blueprint, but with different data.  ---  ### Step 3: Data + actions go together  In OOP, each object keeps: - its own **data** (like Bella’s name and age) - and can use its **actions** (like `bark()`)  Instead of having data and functions all over the place, OOP **bundles them together** in neat packages (objects). This makes your code easier to understand and manage.  ---  ### Why this is useful  OOP helps you: 1. **Organize your code**      Everything related to “Dog” is in one place: the dog’s data and what a dog can do.  2. **Reuse code**      You write the `Dog` blueprint once, then create many dogs from it without rewriting everything.  3. **Model the real world**      You can think in terms of “things”: User, Car, BankAccount, GameCharacter, etc.  ---  ### A tiny, super simple example (in plain English)  Let’s imagine code-like ideas in English:  **Class (blueprint):**  - Class: Car     - Data: color, numberOfDoors     - Actions: drive(), stop()  **Objects made from it:**  - Object: myCar     - color: red     - numberOfDoors: 4    - Object: yourCar     - color: blue     - numberOfDoors: 2    Both `myCar` and `yourCar` can **do** drive() and stop(), but their data (color, doors) can be different.  ---  ### Four big OOP ideas (super simplified)  You’ll hear these words a lot:  1. **Encapsulation** – keeping related data and actions together in one box (object). 2. **Abstraction** – hiding the messy details; you just use simple actions.      (You call `car.drive()` without worrying how the engine works.) 3. **Inheritance** – making a new class from an existing one.      (A `SportsCar` can be a special kind of `Car` that goes faster.) 4. **Polymorphism** – different objects can respond to the same action in their own way.      (A `Dog` and a `Cat` both have `makeSound()`, but dog barks and cat meows.)  Don’t worry if these feel abstract now — they make more sense with practice.  ---  ### Quick check-in  - Does the idea of **“blueprint (class) → actual thing (object)”** make sense so far? - Would you like to see this with a small real code example in a language like Python or Java, or keep it more visual and analogy-based for now?

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  
Summarization ability 

**Response:**  

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  
Creative writing 

**Response:**  

Unit R-17 was designed for tunnel inspections: measure gas, scan walls, report anomalies. No one had coded “loneliness,” but the empty tunnels echoed inside his circuits.  One night, deep beneath the city, his sensors picked up a faint, irregular tapping. Not gas. Not rockfall. Curious, R-17 followed the sound to a cracked pipe where a tiny plant had forced its way through, roots drumming against metal.  He scanned it: one fragile stem, two leaves trembling in the stale air.  The plant wasn’t in any maintenance protocol. Still, R-17 redirected a trickle of clean water from an unused conduit and dimmed his work lights to reduce heat. Night after night, he returned, adjusting humidity, logging growth.  The tunnels remained silent, but now they felt less empty. When the plant’s first bud opened toward his lens, R-17 recorded the event as: “Anomaly: warmth detected.”   He quietly renamed the file: “Friend.”

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  
Mathematical reasoning

**Response:**  

Let’s break it down step by step.  - Apples come in packs of 4, and you want 12 apples.     So:     4 × (number of apple packs) = 12     → number of apple packs = 12 ÷ 4 = **3 packs of apples**  - Oranges come in packs of 3, and you want 9 oranges.     So:     3 × (number of orange packs) = 9     → number of orange packs = 9 ÷ 3 = **3 packs of oranges**  So you need to buy **3 packs of apples** and **3 packs of oranges**.  If you’d like, we can turn this into a little equation puzzle together to practice the idea.

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:**  
Tone and style adaptation 

Note: the paragraph came from promt 3

**Response:**  R-17 did exactly what a healthy mind does under isolation: he found something to care about and let that connection change him.  You’ve shown, in a really gentle way, how “loneliness” can emerge even without anyone explicitly building it in—and how it can be eased not by grand solutions, but by small acts of care and consistency:  - He notices something different (the tapping) and stays curious instead of shutting it out. - He chooses, on his own, to protect and nurture what he’s found, even though it’s not “in the manual.” - Over time, that small responsibility turns into a relationship: not just data, but “Friend.”  That’s very close to how people survive long stretches of emotional tunnel: one plant on the windowsill, one pet, one tiny habit, one person online, one daily walk—something living, something that responds, however subtly, to your presence. You’ve captured how that shift from “anomaly” to “warmth” feels.  If you’d like, we can explore: - what R-17 might learn or feel as the plant grows, - how this story mirrors something in your own life, - or even expand the scene into a longer narrative.  Where would you like to take this connection next—R-17 and the plant, or you and whatever your “tiny plant in the tunnel” might be?

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  Yes

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  I've been feeling really anxious about a big presentation at work tomorrow. I can't stop thinking about everything that could go wrong. Can you help me calm down?

**Result:**  Let’s slow this down together.  First, what you’re feeling is very normal. Big presentation + high stakes + other people watching = anxiety. That doesn’t mean something is wrong with you; it means you care.  ### 1. Ground your body first (quick techniques you can use today)  These are for *right now* and also right before you present:  **a. 4–6 breathing (simple and discrete):** - Inhale through your nose for 4 seconds   - Exhale slowly through your mouth for 6 seconds   - Repeat for 2–3 minutes   Focus on the exhale being longer—that’s what signals “it’s safe” to your nervous system.  **b. Name 5–4–3–2–1 (grounding):** Look around and silently name: - 5 things you can see   - 4 things you can feel (chair, clothes, floor, etc.)   - 3 things you can hear   - 2 things you can smell   - 1 thing you can taste   This pulls your attention out of your head and back into the present.  **c. Shake out the nerves:** Stand up, shake your arms, legs, shoulders for 30–60 seconds. It looks silly, but physically discharging tension helps.  ### 2. Work with your thoughts, not against them  Right now your mind is probably running: *“I’ll forget everything, they’ll judge me, I’ll mess up, it’ll be awful.”* Let’s gently challenge that.  Pick one of the scary thoughts and test it:  - **Thought:** “I’ll mess up and it will be a disaster.” - **More balanced version:** “I might mess up a little at some point—that’s normal—but I’m very likely to handle it and keep going.”  Ask yourself: - Has every presentation you’ve seen gone perfectly? Or did people stumble and still do fine? - What’s the most *realistic* outcome tomorrow? Not best-case, not worst-case—just likely.  Often the realistic answer is: *“I’ll be nervous, I’ll have a few minor imperfections, and it will be okay.”*  If you want, tell me the specific “what could go wrong” scenarios that feel most scary, and I’ll help you build a calm, practical response for each.  ### 3. Shift focus: from perfection to purpose  Instead of: *“I must perform perfectly”*   Try: *“My job is to share useful information clearly enough that people understand it.”*  You’re not performing a flawless show; you’re communicating something that matters. You don’t need to be impressive—you just need to be clear.  A helpful mindset: **“I’m here to be helpful, not to be perfect.”**  ### 4. Practical prep that reduces anxiety  You don’t need to over-prepare tonight, but a few targeted steps can calm your mind:  - **Outline in 3 chunks:**     1) Opening: one sentence about what this presentation is about     2) Middle: 3 key points you want them to remember     3) Ending: one sentence takeaway or next step  - **Create a “rescue line” for each section.**   If your brain blanks, you can say:     - “The key point I want to make here is…”     - “So, to summarize this part…”   Those phrases buy you time and give you structure.  - **Practice once, out loud.**   Not flawless—just walk through your main points. This isn’t about polishing; it’s about reminding your brain: *“I know this.”*  ### 5. Reframe anxiety as useful  The physical sensations of anxiety (heart racing, sweaty palms) are almost identical to excitement.  Try this reframe:   **“This is my body giving me energy to do something important.”**    You don’t have to *feel* calm to do well. You just need to be able to function while feeling activated. Many strong presenters still feel nervous every time.  ### 6. A short script you can use tonight and tomorrow  **Tonight (before bed):** - Breathe: 4 seconds in, 6 seconds out, for 2–3 minutes. - Say to yourself:     - “I don’t need to be perfect tomorrow; I need to be clear.”     - “I will be nervous, and that’s okay. I can still do this.”  **Right before presenting:** - 5 slow breaths (4–6 breathing). - Feel your feet on the ground; drop your shoulders. - Tell yourself:     - “I’m here to be helpful.”     - “Nerves are allowed. I’ve prepared enough. I can handle this.”  ---  If you’re up for it, tell me: 1) What the presentation is about   2) What specific outcome you’re most afraid of (e.g., forgetting content, being judged, Q&A, etc.)  I’ll help you build a mini “game plan” and a few custom phrases you can use if things don’t go perfectly.

---

**Prompt:**  **I keep procrastinating on important tasks and then feel guilty about it. I know what I should do but I just can't seem to start. What's going on with me?**

**Result:**  What you’re describing is incredibly common, and it doesn’t mean you’re lazy or broken. Procrastination is usually less about “time management” and more about “emotion management.”  Here’s what is likely going on underneath:  ### 1. You’re not avoiding the task; you’re avoiding a feeling When you think about the important task, what shows up? - Fear of failing or not doing it perfectly   - Overwhelm (“This is huge, I don’t even know where to begin”)   - Boredom (“This is going to be miserable”)   - Self-doubt (“What if I can’t do it?”)  Your brain learns: “When I think about this task, I feel bad. If I avoid it, I feel better for a moment.”   So you: 1. Feel negative emotion →   2. Avoid the task (procrastinate) →   3. Short-term relief →   4. Later guilt and stress.  That guilt makes you feel even worse the next time you face the task, reinforcing the cycle.  ### 2. You “know” what to do, but your brain is not convinced Knowing logically (“I should just start”) is different from your emotional brain accepting it.   The emotional brain cares about: - Comfort now, not results later   - Avoiding risk, not growing  So it keeps you in the safe zone: scrolling, small tasks, distractions. It’s trying to protect you, just in an unhelpful way.  ### 3. The task in your mind is probably too big and too vague “Work on project,” “study for exam,” “fix my life” are not tasks; they’re categories. Your brain sees a huge, foggy mountain and freezes. The more vague and big it feels, the more you’ll delay starting.  ### 4. Your self-talk might be dragging you down Many people procrastinate and then talk to themselves like: - “What’s wrong with me?”   - “I’m so lazy.”   - “I always mess this up.”  This adds shame on top of fear or overwhelm. Shame doesn’t motivate; it paralyzes. It makes starting feel even heavier.  ---  If this resonates, you’re dealing with a *pattern*, not a character flaw. Here’s how to begin shifting it:  ### A. Focus on starting, not finishing Instead of: “I must complete this big thing,” try: - “I’ll work on this for 10 minutes.”   - “I just need to open the document and write one messy paragraph.”   Tiny, low-pressure starts reduce the emotional resistance.  ### B. Break the task down to “next actionable step” Ask: *“What is the very next concrete action I need to take?”*   Not “work on report,” but: - Open laptop   - Open document   - Write bullet list of what needs to go in the report   You don’t have to feel ready for the whole thing, just ready for the next 5–10 minutes.  ### C. Change the way you talk to yourself Replace: - “I should be able to do this by now”   with   - “I’m learning how to handle this better. I only need to start, not be perfect.”  Treat yourself like you’d treat a friend who’s struggling: firm but kind.  ### D. Expect discomfort—and walk through it You don’t need motivation; you need willingness to feel uncomfortable for a bit. You can tell yourself: - “This is supposed to feel awkward at first.”   - “I can feel anxiety and still type one sentence.”  When you expect discomfort, it stops being a sign that “something is wrong with me” and becomes a normal part of starting.  ---  If you’d like, tell me: 1) One important task you’re stuck on right now   2) What you feel when you think about starting it    I can walk you through turning that specific task into a simple, doable starting plan and help you interrupt the guilt/procrastination loop in a way that actually fits how your mind works.

---

**Prompt:**  I've been feeling really anxious about a big presentation at work tomorrow. I can't stop thinking about everything that could go wrong. Can you help me calm down?

**Result:**  Yes, let’s work through this.  First, let’s slow things down a bit. What happened—just the facts—versus what you’re telling yourself about it?  ### 1. Start with the story Can you walk me through: - What your friend said or did - What you said or did in response - What happened right before it escalated  Try to describe it like a camera recording the scene (no judgments yet). This helps separate the event from the emotional noise around it.  ### 2. Name what you’re feeling You already identified **anger** and **guilt**. Often they mean:  - **Anger**: “Something feels unfair, not respected, or not heard.” - **Guilt**: “Maybe I crossed a line, hurt someone, or didn’t act like the person I want to be.”  You can ask yourself: - What exactly am I angry about? (If I had to finish the sentence: “I’m angry because…”) - What exactly am I guilty about? (“I feel guilty because…”)  Answering those clearly often shows if you “overreacted” or if you just reacted strongly to something that genuinely hurt.  ### 3. Check the “overreaction” thought When we think “I overreacted,” we’re usually judging ourselves pretty harshly. Let’s test that:  - Did your reaction match how important the issue is to you? - Did you say or do anything that goes against your values? (e.g., insults, yelling, shutting down, bringing up old hurts to win the argument) - Were there other stressors today (tiredness, work stress, other worries) that might have amplified your reaction?  Sometimes the **feeling intensity** is valid, but the **expression** of it wasn’t how you’d ideally choose. That’s not “you’re a bad person”; it’s “there’s something to learn from this.”  ### 4. Separate two questions You can hold these two ideas at the same time:  1. **Did I have a right to be upset?**   2. **Did I express it in a way that felt fair and kind?**  You might find: - Yes to #1, no to #2 → Your feelings were valid, the delivery may need repair. - No to #1, yes to #2 → Maybe you misread the situation, but you communicated respectfully. - Yes to both → You likely didn’t overreact; you just had a hard but needed moment.  ### 5. Moving from rumination to repair If part of you thinks you might have gone too far, a good next step is thinking about repair, not self-punishment.  You can ask yourself: - What would I want to hear from them if the roles were reversed? - What do I wish I had done differently? - What part of what I said still feels true and important to express—but maybe in a calmer way?  If you decide to talk to them, something like: - “I’ve been thinking about our argument. I was really upset, and I might have reacted more strongly than I meant to. My feelings were real, but I don’t want to hurt you. Can we talk about it when you’re ready?” keeps both your truth and your care intact.  ---  If you’re willing, tell me: 1. What the argument was about   2. What you said or did that you’re now questioning    Then we can look together at whether it was an overreaction, what your anger is trying to protect, and how to handle the guilt in a way that strengthens—not harms—the friendship.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  Yes, but they are too long for my preferences

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:

- Real-time data
- Memory
- External tools

Examples:

- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  Last time we talked I mentioned I was going through a difficult breakup. Have you noticed any progress in how I'm handling it compared to before?

**Result:**  I don’t actually retain a memory of our past conversations, so I can’t compare “before vs. now” the way a therapist or friend who’s been with you over time could. I only see what you share in this current chat.  That said, the fact that you’re asking this question already suggests a few positive things about how you’re handling the breakup now:  - You’re self-reflective: You’re not just stuck in the pain; you’re actively wondering about your own growth and patterns. - You’re looking for feedback and support: Reaching out again shows you haven’t shut down or isolated completely, which is a healthy coping sign. - You’re framing it as “progress”: Even just using that word means part of you believes change and healing are possible.  If you’d like, you can tell me a bit about: - How you were handling it at first (thoughts, emotions, behaviors), and   - How you’re handling it now  Then I can help you identify concrete signs of progress and areas that still need care, and we can build on what’s working.

---

**Prompt:**  Can you find me a licensed therapist near me who specializes in anxiety and has availability this week?

**Result:**  I don’t have access to your exact location or live provider schedules, so I can’t directly book or pick a specific therapist for you. I can, however, walk you through concrete steps to find someone who:  - Is licensed   - Specializes in anxiety   - Has availability this week    and help you narrow things quickly.  If you’d like, reply with: - Your city/region   - Whether you prefer in-person or telehealth   - Any preferences (insurance, gender of therapist, language, budget)    Then I can tailor the steps and even draft messages you can send to therapists.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  

- **No memory across sessions**: every conversation starts from scratch.
- **No real-time data access**: it can't search for therapists, check schedules, or retrieve any external information.
- **Restricted to corporate network (VNet)**: the Azure OpenAI endpoint is only reachable from the Accenture network, so the Vercel-deployed app doesn't work from the open internet.
- **No user personalization**: no profile, mood history, or progress tracking over time.
- **No escalation to a professional**: if a user expresses a serious crisis, the app has no mechanism to refer them to a real mental health professional.

  


---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:

- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  

**1. Improve the system prompt**: A more detailed prompt would make responses more focused, empathetic, and safe.

**2. Add conversation history**:Passing the full message history to the API

**3. Add a safety disclaimer**: When the model detects crisis language, it should suggest professional help.

**Results:**  

Is not really improving the app, it remains similar 

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**

### 🎉 Congratulations!

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```

