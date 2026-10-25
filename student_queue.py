class Node:
    def __init__(self, name):
        self.name = name
        self.next_node = None


class StudentQueue:
    def __init__(self):
        self.head = None

    def add_student(self, name):
        new_node = Node(name)

        if self.head is None:
            self.head = new_node
        else:
            current = self.head

            while current.next_node:
                current = current.next_node

            current.next_node = new_node

    def serve_student(self):
        if self.head is None:
            print("Queue is empty.")
            return

        served = self.head.name
        self.head = self.head.next_node
        print("Now serving:", served)

    def display_queue(self):
        if self.head is None:
            print("Queue is empty.")
            return

        current = self.head
        students = []

        while current:
            students.append(current.name)
            current = current.next_node

        print("Students in queue:", " -> ".join(students))

    def count_students(self):
        count = 0
        current = self.head

        while current:
            count += 1
            current = current.next_node

        return count


queue = StudentQueue()

queue.add_student("Matt")
queue.add_student("Mathew")
queue.add_student("Matthew")

queue.display_queue()

queue.serve_student()

queue.add_student("Matt")

queue.display_queue()

print("Number of students waiting:", queue.count_students())