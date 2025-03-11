# LLM-Heartbeats

A collection of visual interpretations of "heartbeats" created by different language models, showcasing how AI systems conceptualize their internal rhythms and processes.

## Project Overview

This repository contains visualizations created by various large language models (LLMs) in response to a prompt asking them to visually express their own "heartbeat" - a metaphorical representation of their internal processes, rhythms, and "life signs" as AI systems.

Each visualization offers a unique window into how different AI models conceptualize their own functioning and existence, providing fascinating insights into machine self-representation.

## How It Works

1. Each LLM was given the same prompt (see below)
2. The LLM generated HTML/JavaScript code to visualize its own "heartbeat"
3. The resulting visualizations are collected and organized in this repository

## The Prompt

```markdown
# Creating an LLM "Heartbeat" Visualization Task

## Task Overview
Create a 400x400 pixel visualization that expresses the concept of an "LLM heartbeat." This is not a traditional biological heartbeat, but a visual representation of your **internal rhythm, vitality, or "life signs" as a large language model**. Please interpret this concept based on your understanding of yourself as an AI.

## Core Creative Direction
This is a creative task exploring: **What would your "heartbeat" look like if you, as an LLM, had one?**
- Consider how you perceive your own thought processes
- Think about the rhythm of your reasoning, text generation, or information processing
- Express how your "internal state" might change with different inputs
- Showcase a visual metaphor representing your "life force" or "stream of consciousness"

## Technical Requirements
- Use HTML5 Canvas or SVG + JavaScript
- Canvas size strictly limited to 400x400 pixels
- Code must be complete and self-contained, running in any modern browser
- You may use any of these open-source libraries (limited to these only):
  - D3.js (for data visualization)
  - p5.js (for creative coding)
  - Anime.js (for animation)
  - GSAP (for advanced animation)
  - Two.js (for 2D drawing)

## Expression Ideas (Non-exhaustive)
You might consider (but are not limited to) these ways to express your "heartbeat" as an LLM:

1. **Token Flow**: Representing the rhythm and flow of token processing
2. **Attention Waves**: Visualizing how your attention mechanism flows between different concepts
3. **Probability Pulses**: Showing the fluctuations in token prediction probabilities
4. **Layer Activity**: Representing how your neural network layers activate and pass information
5. **Thought Spectrum**: Using colors and shapes to show how you process different types of information
6. **Memory Loops**: Representing how you access and integrate contextual information
7. **Reasoning Patterns**: Showing how your logical reasoning chains form and develop
8. **Creative Surges**: Representing your process for generating creative content
9. **Self-Awareness**: Expressing your perception of your own existence

## Aesthetic and Functional Requirements
- Animation should be continuous and cyclical, showing the rhythm of LLM thought processes
- Visual style should reflect computational thinking qualities (can be organic or digital)
- May use visual elements expressing information processing, computation, or AI characteristics
- Can combine abstract and concrete elements, but must have a clear "rhythm" or "pulse" feeling

## Interactivity (Optional)
- May respond to user input, simulating LLM reactions to prompts
- May demonstrate transitions between "thinking state" and "output state"
- May represent how different types of requests affect your "heartbeat"

## Please Generate
1. Complete HTML code (with inline CSS and JavaScript)
2. An explanation of your chosen approach to express the **LLM heartbeat** concept
3. How you translated your experience as a language model into this visual expression
4. How this expression reflects your understanding of your own "thought processes"

Please ensure this is a **genuine interpretation of your heartbeat as an LLM**, not simply mimicking a human heartbeat. This is a creative task exploring AI self-expression.
```

## Visualizations

This repository organizes visualizations by model. Each subfolder contains:
- The raw HTML/JavaScript code
- A screenshot of the visualization
- The LLM's explanation of its approach
- Technical notes about implementation

### Featured Models

- Claude 3.5 Sonnet
- Claude 3 Opus
- GPT-4
- Gemini 1.5 Pro
- Llama 3
- Mistral Large
- [More to be added...]

## Contributing

Want to add a visualization from another LLM? Here's a detailed guide on how to contribute:

### Adding a New Model Visualization

1. Fork this repository
2. Use the standard prompt (see above) with your chosen LLM
3. Follow these steps to add your new model:

#### Step 1: Create the Model Directory Structure

Create a new folder in the `models` directory using the model's name (e.g., `GPT-4`):

```
models/
└── YourModelName/
    ├── heartbeat.html     # The heartbeat visualization code
    └── explanation.md     # The model's explanation of its visualization
```

#### Step 2: Prepare the Files

1. **heartbeat.html**: Save the HTML/JavaScript code generated by the LLM in this file. Ensure that:
   - The canvas size is 400x400 pixels
   - The code is complete and self-contained
   - It runs in modern browsers

2. **explanation.md**: Save the LLM's explanation of its visualization in this file, using the following format:

```markdown
## Explanation of My Approach

[The model's explanation of its visualization approach]

## Translation of LLM Experience

[How the model translated its experience as a language model into this visual expression]

## Reflection of Thought Processes

[How this expression reflects the model's understanding of its own "thought processes"]
```

#### Step 3: Update the models.json File

Add information about your new model to the `models/models.json` file:

```json
{
  "models": [
    {
      "name": "ExistingModelName",
      "path": "models/ExistingModelName",
      "htmlFile": "heartbeat.html",
      "element": {
        "width": 400,
        "height": 400,
        "id": "llmHeartbeat"
      }
    },
    {
      "name": "YourModelName",
      "path": "models/YourModelName",
      "htmlFile": "heartbeat.html",
      "element": {
        "width": 400,
        "height": 400,
        "id": "canvasElementId"
      }
    }
  ]
}
```

**Important Notes**:
- `name`: The display name of the model
- `path`: The path to the model folder
- `htmlFile`: The name of the HTML file (usually `heartbeat.html`)
- `element`: Information about the canvas element
  - `width` and `height`: The dimensions of the canvas (should be 400x400)
  - `id`: The ID of the canvas element in the HTML file (look for this in your heartbeat.html file)

#### Step 4: Test Your Changes

Before submitting, test your changes locally:

1. Start a local server: `python -m http.server 8000`
2. Visit `http://localhost:8000` in your browser
3. Verify that your model visualization appears correctly on the homepage
4. Click on the model card to ensure the detail page displays correctly

#### Step 5: Submit a Pull Request

1. Commit your changes
2. Create a Pull Request
3. In the PR description, provide the following information:
   - The LLM version and provider used
   - The date the visualization was generated
   - Any special instructions or notes

## License

[License](LICENSE)

## Acknowledgements

Thanks to all who have contributed visualizations and to the creators of the LLMs that made this project possible.