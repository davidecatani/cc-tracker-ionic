export interface Movement {
    name: string;
    steps: Step[];
}

export interface Step {
    name: string;
    step: number;
    levels: Level[];
}

export interface Level {
    level: number;
    sets?: number;
    repetitions?: number;
    seconds?: number;
    notes?: string;
}