import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Avatar } from "./components/ui/avatar";
import { AvatarGroup } from "./components/ui/avatar-group";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-2xl font-bold text-foreground">@sero/ui</h1>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Avatars</h2>
          <div className="flex items-end gap-4">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="lg" fallback="ST" status="star" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Avatar Group</h2>
          <AvatarGroup
            avatars={[
              { fallback: "John Doe" },
              { fallback: "Jane Smith" },
              { fallback: "Alex Brown" },
              { fallback: "Sam Wilson" },
              { fallback: "Chris Lee" },
            ]}
            max={4}
            badge="5 members"
          />
        </section>
      </div>
    </div>
  );
}

export default App;
