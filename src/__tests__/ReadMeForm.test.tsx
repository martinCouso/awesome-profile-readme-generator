import { render, screen, waitFor } from '@testing-library/react'
import ReadMeForm from '@/components/readme-form/ReadMeForm'
import userEvent from '@testing-library/user-event'

test('Rendering and submitting ReadMeForm with Required Fields', async () => {
  const handleSubmit = jest.fn()
  render(<ReadMeForm onCollectedInfo={handleSubmit} />)
  const user = userEvent.setup()

  await user.type(
    screen.getByLabelText(/Hi there, my name is/i),
    'Martin Couso'
  )
  await user.type(
    screen.getByLabelText(/My GitHub username is/i),
    'martinCouso'
  )
  await user.type(screen.getByLabelText(/I am a/i), 'Sr React Native Developer')
  await user.type(
    screen.getByLabelText(/A little about me:/i),
    'Description test1'
  )

  await user.click(screen.getByRole('button', { name: /Generate/i }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      githubUsername: 'martinCouso',
      name: 'Martin Couso',
      description: 'Description test1',
      developerType: 'Sr React Native Developer',
      cv: undefined,
      linkedIn: undefined,
      twitter: undefined,
      instagram: undefined,
      stackoverflow: undefined,
      email: undefined,
    })
  )
})
