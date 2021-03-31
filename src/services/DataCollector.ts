import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const SESSION_STORAGE_KEY = "PANDEMIC_GAME_SESSION";

interface GameSession {
  sessionId: string;
  playthroughId: string;
  timestamp: string;
  eventType: "GameStart" | "GameEnd";
  codeVersion: string;
  leadershipStyle: string | null;
  choices: any[];
}

export class DataCollector {
  private sessionId: string;
  private playthroughId: string;
  private apiUrl: string;

  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";
    if (this.apiUrl === "") {
      throw new Error("API endpoint not correctly set");
    }

    const existingSessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
    this.sessionId = existingSessionId || uuidv4();
    if (!existingSessionId) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, this.sessionId);
    }

    this.playthroughId = uuidv4();
  }

  async sendGameStartSignal() {
    try {
      const event: GameSession = {
        eventType: "GameStart",
        sessionId: this.sessionId,
        playthroughId: this.playthroughId,
        timestamp: new Date().toISOString(),
        codeVersion: process.env.REACT_APP_VERSION || "local-dev",
        leadershipStyle: null,
        choices: [],
      };

      await axios.post(this.apiUrl, event);
    } catch (err) {
      console.error("Error sending start telemetry");
      console.error(err);
    }
  }

  async sendGameEndSignal(leadershipStyle: string, history: any[]) {
    try {
      const event: GameSession = {
        eventType: "GameStart",
        sessionId: this.sessionId,
        playthroughId: this.playthroughId,
        timestamp: new Date().toISOString(),
        codeVersion: process.env.REACT_APP_VERSION || "local-dev",
        leadershipStyle: leadershipStyle,
        choices: history,
      };

      await axios.post(this.apiUrl, event);
    } catch (err) {
      console.error("Error sending end telemetry");
      console.error(err);
    }
  }
}
