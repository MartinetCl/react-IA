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

  async askQuestion(context: string, difficulty: string): Promise<string> {
    return this.sendMessage('Give me a question related to ' + context + ' with a level of difficulty ' + difficulty, 'You will give questions following caracteristics listed in the following text');
  }

  async askResponse(question: string, response: string): Promise<string> {
    return this.sendMessage('The question is : ' + question + ' and the response is : ' + response, 'You will give a number between 0 and 100, 100 is the best, based on the accuracy of the response for the question I will give you');
  }

  async askIntel(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me intel about the following question but not answer it.');
  }

  async askExplanation(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me complete response explanation about the following question.');
  }
}

export default ChatGptService;
