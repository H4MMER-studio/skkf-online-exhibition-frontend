export interface IAppProps {
  isUnmountHome: boolean;
  onClickDesigner(name: string): void;
}

export interface IReviewData {
  _id: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  guest_ip_address: string;
  guest_device: string;
  guest_nickname: string;
  guest_content: string;
}
