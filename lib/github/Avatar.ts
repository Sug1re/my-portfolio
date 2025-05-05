export const getGitHubAvatar = async (username: string): Promise<string | null> => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("GitHubユーザー情報の取得に失敗しました");
      const data = await res.json();
      return data.avatar_url;
    } catch (error) {
      console.error(error);
      return null;
    }
  };