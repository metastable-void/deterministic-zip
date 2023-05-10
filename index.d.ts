
export interface DeterministicZipOption {
    includes?: string[];
    excludes?: string[];
    cwd?: string;
}

export type DeterministicZipCallback = (err: any) => void;

export default function (dir: string, destination: string, options: DeterministicZipOption, callback: DeterministicZipCallback): void;

export default function (dir: string, destination: string, callback: DeterministicZipCallback): void;
