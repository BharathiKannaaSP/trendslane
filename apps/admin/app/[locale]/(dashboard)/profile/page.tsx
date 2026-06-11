import Image from "next/image"
import { authRepository } from "@/modules/users/api/auth.repository"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default async function ProfilePage() {
  const { user } = await authRepository.getCurrentUser()

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Current User</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {user.imageUrl && (
            <Image
              src={user.imageUrl}
              alt={user.firstName ?? user.username}
              width={96}
              height={96}
              className="rounded-full border object-cover"
              priority
            />
          )}

          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Clerk User ID:</strong> {user.clerkUserId}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>First Name:</strong> {user.firstName ?? "-"}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName ?? "-"}
          </p>
          <p>
            <strong>Role:</strong> {user.systemRole}
          </p>
          <p>
            <strong>Onboarding:</strong> {user.onboardingStatus}
          </p>

          <div>
            <strong>Memberships:</strong>
            <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-sm">
              {JSON.stringify(user.memberships, null, 2)}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
