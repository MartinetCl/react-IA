import { OpenAI } from 'openai';

class ChatGptService {
  private api: OpenAI;
  constructor() {
    this.api = new OpenAI({
      apiKey: process.env.API_KEY,
    });
  }

  async sendMessage(text: string, context: string): Promise<string> {
    try {
      const result = await this.api.chat.completions.create({
        messages: [
          { role: 'system', content: context },
          { role: 'user', content: text }
        ],
        model: 'gpt-3.5-turbo',
      });

      return result.choices[0].message.content;
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API ChatGPT:', error);
      throw error;
    }
  }

  async askQuestion(question: string, context: string, difficulty: string): Promise<string> {
    return this.sendMessage(question, 'Give me a question related to ' + context + ' with a level of difficulty ' + difficulty);
  }

  async askResponse(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me the response to the following question.');
  }

  async askIntel(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me intel about the following question but not answer it.');
  }

  async askExplanation(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me complete response explanation about the following question.');
  }
}

export default ChatGptService;
