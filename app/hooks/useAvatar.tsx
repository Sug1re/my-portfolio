"use client";

import { useEffect, useState } from "react";
import { getGitHubAvatar } from "../../lib/github/Avatar";

export const useGitHubAvatar = (username: string) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const url = await getGitHubAvatar(username);
      setAvatarUrl(url);
    };
    fetchAvatar();
  }, [username]);

  return avatarUrl;
};
