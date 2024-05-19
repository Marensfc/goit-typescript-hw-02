export type Params = {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
  orientation: string;
};

export type ResponseData = {
  results: Image[];
  total_pages: number;
  total: number;
};

export type Image = {
  alt_description: string;
  alternative_slugs: object;
  asset_type: string;
  blur_hash: string;
  breadcrumbs: object[];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: object;
  promoted_at: null;
  slug: string;
  sponsorship: null;
  tags: object[];
  topic_submissions: object;
  updated_at: string;
  urls: object;
  user: Object;
  width: number;
};
