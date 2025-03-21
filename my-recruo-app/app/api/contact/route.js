// File: app/api/contact/route.js
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Path to the JSON file where form submissions will be stored
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'submissions.json');

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract form data
    const { firstName, lastName, email, company, message } = body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create submission object with timestamp
    const submission = {
      id: Date.now().toString(), // Simple unique ID
      firstName,
      lastName,
      email,
      company: company || '',
      message,
      submittedAt: new Date().toISOString()
    };

    // Ensure the data directory exists
    try {
      await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
    } catch (error) {
      // Directory already exists or another error
      console.error('Error creating directory:', error);
    }

    // Read existing submissions or create empty array if file doesn't exist
    let submissions = [];
    try {
      const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is invalid JSON, starting with empty array
      console.log('Creating new submissions file');
    }

    // Add new submission
    submissions.push(submission);

    // Write updated submissions back to file
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(submissions, null, 2), 'utf8');

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Form submission saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving submission:', error);
    
    return NextResponse.json(
      { error: 'Failed to save submission', details: error.message },
      { status: 500 }
    );
  }
}