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
    return this.sendMessage('Give me just the question related to ' + context + ' with a level of difficulty ' + difficulty, 'You will give questions following caracteristics listed in the following text');
  }

  async askResponse(question: string, response: string): Promise<string> {
    return this.sendMessage('Evaluate how well the response aligns with the context:\n\n' + 
    'Question: ' + question + '\n' + 
    'Expected Response: ' + response,
    'Provide a score between 0 and 100 and only give that score. The score should reflect the contextual accuracy of the response to the given question. For example, if the question is about Cinderella and the expected response is "Cinderella," a score of 100 is perfect. A lower score should be given if the response deviates from the expected context.');
  }

  async askIntel(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me intel about the following question but not answer it.');
  }

  async askExplanation(question: string): Promise<string> {
    return this.sendMessage(question, 'Give me complete response explanation about the following question.');
  }
}

export default ChatGptService;
