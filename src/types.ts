export type Data = {
  description: string | null;
  interest: string | null;
  mathLevel: string | null;
};

export type Item = {
  id: string;
  value: string;
  alternate: string;
  img?: string;
  icon?: React.ReactNode;
};
