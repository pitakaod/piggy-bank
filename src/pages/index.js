import { useState } from "react";
import { UnlockedView } from "@/components/views/unlocked_view";
import { AuthView } from "@/components/views/auth_view";

export default function Home() {
    const [user, setUser] = useState(false);

    return <>{user ? <UnlockedView /> : <AuthView />}</>;
}
