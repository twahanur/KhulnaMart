import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function PolicySection({ title, content, className = "" }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  )
}
