// File: app/api/contact/submissions/route.js
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Path to the JSON file where form submissions are stored
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'submissions.json');

export async function GET() {
  try {
    // Read submissions from file
    let submissions = [];
    try {
      const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is invalid JSON
      console.log('No submissions file found or error reading file');
    }

    // Return submissions
    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    
    return NextResponse.json(
      { error: 'Failed to retrieve submissions', details: error.message },
      { status: 500 }
    );
  }
}