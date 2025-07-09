export type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
  createdAt: Date;
  questionsCount: number;
}>;
