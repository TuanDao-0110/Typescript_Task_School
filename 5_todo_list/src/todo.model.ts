export interface todo {
  id: string;
  text: string;
}
export interface todoProp {
  items: Array<{ id: string; text: string }>;
  onDelete: (id: string) => void;
  toDoEdit: (id: string, newText: string) => void;

}
