interface props {
  id: number;
  name: string;
  a: teams[];
}

interface teams {
  team: string;
}
export const Champions: Array<props> = [
  {
    id: 1,
    name: 'NGOAI HANG ANH',
    a: [
      { team: ' Old Trafford' },
      { team: ' St. James Park' },
      { team: ' Vicarage Road' },
      { team: ' Molineux Stadium' },
      { team: ' St. Marys Stadium' },
      { team: 'Emirates Stadium' },
    ],
  },
];
