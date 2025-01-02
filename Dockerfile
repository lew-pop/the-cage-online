# Use Python as the base image
FROM python:3.8.5

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Run migrations and collect static files
CMD python manage.py migrate && \
    python manage.py collectstatic --no-input

# Start the Django development server (for production, use a WSGI server like Gunicorn)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] 
