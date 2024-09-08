import { Task } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    // Tasks for User 1
    {
      id: '1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular from scratch',
      dueDate: '2025-12-31',
    },
    {
      id: '2',
      userId: 'u1',
      title: 'Understand TypeScript',
      summary: 'Get familiar with TypeScript features and usage',
      dueDate: '2025-11-15',
    },
    {
      id: '3',
      userId: 'u1',
      title: 'Implement REST API',
      summary: 'Build a REST API using Node.js and Express',
      dueDate: '2025-10-01',
    },
    {
      id: '4',
      userId: 'u1',
      title: 'Deploy to AWS',
      summary: 'Deploy applications using AWS services',
      dueDate: '2025-09-30',
    },
    {
      id: '5',
      userId: 'u1',
      title: 'Learn Docker',
      summary: 'Understand Docker containers and orchestration',
      dueDate: '2025-08-20',
    },
    {
      id: '6',
      userId: 'u1',
      title: 'Explore DevOps',
      summary: 'Introduction to DevOps practices and tools',
      dueDate: '2025-07-15',
    },

    // Tasks for User 2
    {
      id: '7',
      userId: 'u2',
      title: 'Build a Chatbot',
      summary: 'Create a chatbot using Python and NLP',
      dueDate: '2025-12-10',
    },
    {
      id: '8',
      userId: 'u2',
      title: 'Master React',
      summary: 'Learn React for frontend development',
      dueDate: '2025-11-25',
    },
    {
      id: '9',
      userId: 'u2',
      title: 'Implement GraphQL',
      summary: 'Integrate GraphQL with existing backend services',
      dueDate: '2025-10-18',
    },
    {
      id: '10',
      userId: 'u2',
      title: 'Optimize SQL Queries',
      summary: 'Improve database performance by optimizing SQL queries',
      dueDate: '2025-09-12',
    },
    {
      id: '11',
      userId: 'u2',
      title: 'Secure Web Applications',
      summary: 'Learn about web application security practices',
      dueDate: '2025-08-05',
    },
    {
      id: '12',
      userId: 'u2',
      title: 'Data Visualization with D3.js',
      summary: 'Create interactive data visualizations using D3.js',
      dueDate: '2025-07-20',
    },

    // Tasks for User 3
    {
      id: '13',
      userId: 'u3',
      title: 'Explore Machine Learning',
      summary: 'Understand basics of machine learning algorithms',
      dueDate: '2025-12-05',
    },
    {
      id: '14',
      userId: 'u3',
      title: 'Design Database Schema',
      summary: 'Create and optimize a relational database schema',
      dueDate: '2025-11-30',
    },
    {
      id: '15',
      userId: 'u3',
      title: 'Master Kubernetes',
      summary: 'Deploy and manage applications with Kubernetes',
      dueDate: '2025-10-20',
    },
    {
      id: '16',
      userId: 'u3',
      title: 'Learn Vue.js',
      summary: 'Get started with Vue.js framework',
      dueDate: '2025-09-28',
    },
    {
      id: '17',
      userId: 'u3',
      title: 'Build a Mobile App',
      summary: 'Develop a cross-platform mobile app using Flutter',
      dueDate: '2025-08-22',
    },
    {
      id: '18',
      userId: 'u3',
      title: 'Enhance UI/UX',
      summary: 'Improve the user interface and user experience of the website',
      dueDate: '2025-07-10',
    },

    // Tasks for User 4
    {
      id: '19',
      userId: 'u4',
      title: 'Master Python',
      summary: 'Learn advanced Python programming techniques',
      dueDate: '2025-12-08',
    },
    {
      id: '20',
      userId: 'u4',
      title: 'Automate Testing',
      summary: 'Implement automated testing for applications',
      dueDate: '2025-11-20',
    },
    {
      id: '21',
      userId: 'u4',
      title: 'Understand CI/CD',
      summary: 'Set up continuous integration and delivery pipelines',
      dueDate: '2025-10-10',
    },
    {
      id: '22',
      userId: 'u4',
      title: 'Learn Data Science',
      summary: 'Explore data science tools and techniques',
      dueDate: '2025-09-15',
    },
    {
      id: '23',
      userId: 'u4',
      title: 'Integrate Payment Gateway',
      summary: 'Add payment gateway to the e-commerce platform',
      dueDate: '2025-08-12',
    },
    {
      id: '24',
      userId: 'u4',
      title: 'Develop Microservices',
      summary: 'Build microservices architecture for backend',
      dueDate: '2025-07-25',
    },

    // Tasks for User 5
    {
      id: '25',
      userId: 'u5',
      title: 'Learn Blockchain Basics',
      summary: 'Understand the fundamentals of blockchain technology',
      dueDate: '2025-12-15',
    },
    {
      id: '26',
      userId: 'u5',
      title: 'Build Serverless Functions',
      summary: 'Deploy serverless functions with AWS Lambda',
      dueDate: '2025-11-10',
    },
    {
      id: '27',
      userId: 'u5',
      title: 'Master SEO',
      summary: 'Learn SEO best practices for websites',
      dueDate: '2025-10-22',
    },
    {
      id: '28',
      userId: 'u5',
      title: 'Implement OAuth 2.0',
      summary: 'Add OAuth 2.0 authentication to the application',
      dueDate: '2025-09-05',
    },
    {
      id: '29',
      userId: 'u5',
      title: 'Learn WebRTC',
      summary: 'Understand real-time communication with WebRTC',
      dueDate: '2025-08-18',
    },
    {
      id: '30',
      userId: 'u5',
      title: 'Monitor Application Performance',
      summary: 'Set up monitoring for performance and error tracking',
      dueDate: '2025-07-30',
    },

    // Tasks for User 6
    {
      id: '31',
      userId: 'u6',
      title: 'Create RESTful API',
      summary: 'Design and build a RESTful API with Django',
      dueDate: '2025-12-01',
    },
    {
      id: '32',
      userId: 'u6',
      title: 'Master GraphQL',
      summary: 'Learn GraphQL for building scalable APIs',
      dueDate: '2025-11-18',
    },
    {
      id: '33',
      userId: 'u6',
      title: 'Implement Caching',
      summary: 'Improve app performance with caching strategies',
      dueDate: '2025-10-30',
    },
    {
      id: '34',
      userId: 'u6',
      title: 'Design Micro Frontends',
      summary: 'Architect micro frontends for the application',
      dueDate: '2025-09-19',
    },
    {
      id: '35',
      userId: 'u6',
      title: 'Learn Cloud Computing',
      summary: 'Understand cloud computing concepts and services',
      dueDate: '2025-08-28',
    },
    {
      id: '36',
      userId: 'u6',
      title: 'Automate Deployments',
      summary: 'Automate deployments using Ansible',
      dueDate: '2025-07-05',
    },
  ] as Task[];

  constructor() {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    } else {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  getUserTasks(userId: string): Task[] {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) {
      return [];
    }
    return JSON.parse(tasks).filter((task: Task) => task.userId === userId);
  }

  addTask(task: Task): void {
    this.tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTaskForId(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
