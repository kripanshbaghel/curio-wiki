-- Saved resources: per-user bookmarked topics, experiments, and videos.
-- RLS scopes every operation to auth.uid() = user_id.

create table if not exists public.saved_resources (
  user_id uuid not null references auth.users on delete cascade,
  resource_type text not null check (resource_type in ('topic', 'experiment', 'video')),
  resource_id text not null,
  title text not null,
  url text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, resource_type, resource_id)
);

alter table public.saved_resources enable row level security;

create policy "saved_resources_select_own"
  on public.saved_resources for select
  using (auth.uid() = user_id);

create policy "saved_resources_insert_own"
  on public.saved_resources for insert
  with check (auth.uid() = user_id);

create policy "saved_resources_delete_own"
  on public.saved_resources for delete
  using (auth.uid() = user_id);

create index if not exists saved_resources_user_id_idx
  on public.saved_resources (user_id);
