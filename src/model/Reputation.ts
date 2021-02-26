
export interface Reputation {
    id: string;
    name: string; 
    example: {
        name: string;
        description: string;
    };
    icon: string;
    description: string;
    values: {
        public: number;
        economy: number;
        healthcare: number;
    };
    style: {
        col: string;
    }
}
