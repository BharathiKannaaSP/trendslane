"use client"

import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { useCurrentUser } from "@/modules/users/api/auth.repository.hooks"

export default function ProfilePage() {
  const { data, isLoading, error } = useCurrentUser()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Failed to load user</div>
  }

  if (!data?.user) {
    return <div>No user found</div>
  }

  const { user } = data

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
              alt={
                user.firstName || user.username || user.email || "Profile image"
              }
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
            <strong>User:</strong>
            <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-sm">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

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
