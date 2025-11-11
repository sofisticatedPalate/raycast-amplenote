import { ActionPanel, Detail, List, Action, Icon } from "@raycast/api";

/**
 * Renders the command UI: a list containing a single "Greeting" item that opens a detail view.
 *
 * @returns A React element that displays a Raycast List with one List.Item (icon: Bird, title: "Greeting")
 *          whose action pushes a Detail showing the markdown header "# Hey! 👋".
 */
export default function Command() {
  return (
    <List>
      <List.Item
        icon={Icon.Bird}
        title="Greeting"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
    </List>
  );
}